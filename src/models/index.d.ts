import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DeviceInventoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DeviceInventory {
  readonly id: string;
  readonly device: string;
  readonly brand: string;
  readonly model: string;
  readonly serial?: string;
  readonly inuse: boolean;
  readonly location: string;
  readonly unitCost?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DeviceInventory, DeviceInventoryMetaData>);
  static copyOf(source: DeviceInventory, mutator: (draft: MutableModel<DeviceInventory, DeviceInventoryMetaData>) => MutableModel<DeviceInventory, DeviceInventoryMetaData> | void): DeviceInventory;
}