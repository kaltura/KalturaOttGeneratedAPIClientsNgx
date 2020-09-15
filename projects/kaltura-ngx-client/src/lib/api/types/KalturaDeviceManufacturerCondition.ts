
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDeviceManufacturerConditionArgs  extends KalturaConditionArgs {
    idIn? : string;
}


export class KalturaDeviceManufacturerCondition extends KalturaCondition {

    idIn : string;

    constructor(data? : KalturaDeviceManufacturerConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceManufacturerCondition' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeviceManufacturerCondition'] = KalturaDeviceManufacturerCondition;