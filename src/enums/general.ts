enum Relationships {
  HAS_MANY = 'HAS_MANY',
  BELONGS_TO = 'BELONGS_TO'
}

enum SyncStatus {
  SYNCED = 'SYNCED',
  NOT_SYNCED = 'NOT_SYNCED',
  IN_SYNC = 'IN_SYNC'
}

export { Relationships, SyncStatus }
