
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaChannelConditionArgs  extends KalturaConditionArgs {
    idIn? : string;
}


export class KalturaChannelCondition extends KalturaCondition {

    idIn : string;

    constructor(data? : KalturaChannelConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelCondition' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaChannelCondition'] = KalturaChannelCondition;