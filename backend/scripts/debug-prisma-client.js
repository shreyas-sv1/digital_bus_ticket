const { PrismaClient, Prisma } = require('@prisma/client');
const path = require('path');
const fs = require('fs');

const ENDPOINT = 'http://127.0.0.1:7477/ingest/cdee3889-e47b-42ba-ab75-aa39bb9526a7';
const SESSION_ID = '78765d';
const RUN_ID = 'initial';

function sendLog(hypothesisId, location, message, data) {
  // #region agent log
  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': SESSION_ID },
    body: JSON.stringify({
      sessionId: SESSION_ID,
      runId: RUN_ID,
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  const line = JSON.stringify({
    sessionId: SESSION_ID,
    runId: RUN_ID,
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
  });
  try {
    fs.appendFileSync(path.join(process.cwd(), '..', 'debug-78765d.log'), `${line}\n`, 'utf8');
  } catch {}
}

async function main() {
  sendLog('H3', 'scripts/debug-prisma-client.js:29', 'Resolved Prisma client package metadata', {
    resolvedClientPath: require.resolve('@prisma/client'),
    clientVersion: require('@prisma/client/package.json').version,
  });

  const ctorSource = String(PrismaClient);
  sendLog('H1', 'scripts/debug-prisma-client.js:35', 'PrismaClient constructor source probe', {
    throwsUninitializedError: ctorSource.includes('did not initialize yet'),
    sourceSnippet: ctorSource.slice(0, 180),
  });

  const prisma = new PrismaClient();
  const delegateKeys = Object.keys(prisma).filter((k) => !k.startsWith('$') && !k.startsWith('_'));
  const modelNames = ((Prisma && Prisma.dmmf && Prisma.dmmf.datamodel && Prisma.dmmf.datamodel.models) || []).map(
    (m) => m.name,
  );
  const clientPath = require.resolve('@prisma/client');
  const clientPkgPath = path.join(path.dirname(clientPath), 'package.json');
  const clientPkg = require(clientPkgPath);

  sendLog('H1', 'scripts/debug-prisma-client.js:29', 'Prisma delegate keys discovered', {
    delegateKeys,
    hasTicketDelegate: delegateKeys.includes('ticket'),
    hasTravelSessionDelegate: delegateKeys.includes('travelSession'),
    hasVerificationLogDelegate: delegateKeys.includes('verificationLog'),
  });
  sendLog('H2', 'scripts/debug-prisma-client.js:35', 'Prisma DMMF model names discovered', {
    modelNames,
    hasTicketModel: modelNames.includes('Ticket'),
    hasTravelSessionModel: modelNames.includes('TravelSession'),
    hasVerificationLogModel: modelNames.includes('VerificationLog'),
  });
  sendLog('H4', 'scripts/debug-prisma-client.js:52', 'Probe finished before backend compile', {
    note: 'If delegates/models are missing here, backend TS errors are generated-client related, not auth/login data.',
  });

  await prisma.$disconnect();
}

main().catch((error) => {
  sendLog('H5', 'scripts/debug-prisma-client.js:54', 'Probe crashed', { errorMessage: error.message });
});
