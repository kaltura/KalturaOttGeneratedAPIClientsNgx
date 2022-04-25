
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDynamicListFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaDynamicListFilter extends KalturaFilter {

    

    constructor(data? : KalturaDynamicListFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicListFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDynamicListFilter'] = KalturaDynamicListFilter;