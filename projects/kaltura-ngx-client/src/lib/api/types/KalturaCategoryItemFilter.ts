
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCategoryItemFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaCategoryItemFilter extends KalturaFilter {

    

    constructor(data? : KalturaCategoryItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryItemFilter'] = KalturaCategoryItemFilter;