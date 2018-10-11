
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRelatedObjectFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaRelatedObjectFilter extends KalturaFilter {

    

    constructor(data? : KalturaRelatedObjectFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedObjectFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRelatedObjectFilter'] = KalturaRelatedObjectFilter;