
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaUdidDynamicListConditionArgs  extends KalturaConditionArgs {
    id? : number;
}


export class KalturaUdidDynamicListCondition extends KalturaCondition {

    id : number;

    constructor(data? : KalturaUdidDynamicListConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUdidDynamicListCondition' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUdidDynamicListCondition'] = KalturaUdidDynamicListCondition;