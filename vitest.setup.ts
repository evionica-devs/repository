import { vi } from "vitest"
import fetch from "node-fetch"
import {
  indexedDB,
  IDBCursor,
  IDBCursorWithValue,
  IDBDatabase,
  IDBFactory,
  IDBIndex,
  IDBKeyRange,
  IDBObjectStore,
  IDBOpenDBRequest,
  IDBRequest,
  IDBTransaction,
  IDBVersionChangeEvent
} from "fake-indexeddb"

vi.stubGlobal("indexedDB", indexedDB)
vi.stubGlobal("IDBCursor", IDBCursor)
vi.stubGlobal("IDBCursorWithValue", IDBCursorWithValue)
vi.stubGlobal("IDBDatabase", IDBDatabase)
vi.stubGlobal("IDBFactory", IDBFactory)
vi.stubGlobal("IDBIndex", IDBIndex)
vi.stubGlobal("IDBKeyRange", IDBKeyRange)
vi.stubGlobal("IDBObjectStore", IDBObjectStore)
vi.stubGlobal("IDBOpenDBRequest", IDBOpenDBRequest)
vi.stubGlobal("IDBRequest", IDBRequest)
vi.stubGlobal("IDBTransaction", IDBTransaction)
vi.stubGlobal("IDBVersionChangeEvent", IDBVersionChangeEvent)

vi.stubGlobal("fetch", fetch)
