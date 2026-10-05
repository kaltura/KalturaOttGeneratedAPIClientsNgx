
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseWatchCondition, KalturaBaseWatchConditionArgs } from './KalturaBaseWatchCondition';

export interface KalturaWatchCountConditionArgs  extends KalturaBaseWatchConditionArgs {
    minCount? : number;
	maxCount? : number;
}


export class KalturaWatchCountCondition extends KalturaBaseWatchCondition {

    minCount : number;
	maxCount : number;

    constructor(data? : KalturaWatchCountConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchCountCondition' },
				minCount : { type : 'n' },
				maxCount : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWatchCountCondition'] = KalturaWatchCountCondition;