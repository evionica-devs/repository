import { SyncStatus } from "@/enums"

export class Syncable {
  private readonly _id: string | symbol
  private _status: SyncStatus

  constructor(id: string | symbol, status: SyncStatus) {
    this._id = id
    this._status = status
  }

  get isSynced(): boolean {
    return this._status === SyncStatus.IN_SYNC
  }

  public get lastSynced(): DateTime {
    return ""
  }

  public set syncStatus(status: SyncStatus) {
    this._status = status
  }
}
