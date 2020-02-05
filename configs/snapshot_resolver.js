module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) => testPath.replace('__snapshots__') + snapshotExtension,
    resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath.replace('__snapshots__').slice(0, -snapshotExtension.length),
    testPathForConsistencyCheck: ''
};