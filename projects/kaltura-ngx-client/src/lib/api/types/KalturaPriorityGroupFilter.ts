
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaPriorityGroupFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaPriorityGroupFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaPriorityGroupFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPriorityGroupFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPriorityGroupFilter'] = KalturaPriorityGroupFilter;