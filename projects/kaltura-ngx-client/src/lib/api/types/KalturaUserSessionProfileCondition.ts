
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaUserSessionProfileConditionArgs  extends KalturaConditionArgs {
    id? : number;
}


export class KalturaUserSessionProfileCondition extends KalturaCondition {

    id : number;

    constructor(data? : KalturaUserSessionProfileConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSessionProfileCondition' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserSessionProfileCondition'] = KalturaUserSessionProfileCondition;