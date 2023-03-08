import type { Entity } from "@/interfaces"
import { RelationshipManager } from "@/RelationshipManager"

class GenericEntity implements Entity {
  private readonly _syncMap: Syncable[]
  private readonly _localKey: string
  private readonly _remoteKey: string
  private readonly _relationshipManager: RelationshipManager

  public constructor(localKey: string, remoteKey: string) {
    this._localKey = localKey
    this._remoteKey = remoteKey
    this._relationshipManager = new RelationshipManager()
  }

  public get localKey() {
    return this._localKey
  }

  public get remoteKey() {
    return this._remoteKey
  }

  public update(): Entity {
    return this
  }

  public toNativeObject(): Object {
    return {}
  }

  public toJSON(): string {
    return ""
  }

  public relationships(): RelationshipManager {
    return this._relationshipManager
  }

  public relationship(id: string | symbol) {}
}
