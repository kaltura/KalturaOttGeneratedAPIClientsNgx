
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDynamicListFilter, KalturaDynamicListFilterArgs } from './KalturaDynamicListFilter';

export interface KalturaDynamicListIdInFilterArgs  extends KalturaDynamicListFilterArgs {
    idIn? : string;
}


export class KalturaDynamicListIdInFilter extends KalturaDynamicListFilter {

    idIn : string;

    constructor(data? : KalturaDynamicListIdInFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicListIdInFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDynamicListIdInFilter'] = KalturaDynamicListIdInFilter;