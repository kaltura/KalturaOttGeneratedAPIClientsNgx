
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDeviceFamilyConditionArgs  extends KalturaConditionArgs {
    idIn? : string;
}


export class KalturaDeviceFamilyCondition extends KalturaCondition {

    idIn : string;

    constructor(data? : KalturaDeviceFamilyConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceFamilyCondition' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeviceFamilyCondition'] = KalturaDeviceFamilyCondition;