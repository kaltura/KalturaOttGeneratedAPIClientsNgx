
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryItemFilter, KalturaCategoryItemFilterArgs } from './KalturaCategoryItemFilter';

export interface KalturaCategoryItemByRootFilterArgs  extends KalturaCategoryItemFilterArgs {
    
}


export class KalturaCategoryItemByRootFilter extends KalturaCategoryItemFilter {

    

    constructor(data? : KalturaCategoryItemByRootFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemByRootFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryItemByRootFilter'] = KalturaCategoryItemByRootFilter;