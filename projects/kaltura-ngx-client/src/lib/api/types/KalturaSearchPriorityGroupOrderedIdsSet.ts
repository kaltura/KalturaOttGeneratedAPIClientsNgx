
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchPriorityGroupOrderedIdsSetArgs  extends KalturaObjectBaseArgs {
    priorityGroupIds? : string;
}


export class KalturaSearchPriorityGroupOrderedIdsSet extends KalturaObjectBase {

    priorityGroupIds : string;

    constructor(data? : KalturaSearchPriorityGroupOrderedIdsSetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchPriorityGroupOrderedIdsSet' },
				priorityGroupIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchPriorityGroupOrderedIdsSet'] = KalturaSearchPriorityGroupOrderedIdsSet;