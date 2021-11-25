// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DeviceInventory } = initSchema(schema);

export {
  DeviceInventory
};