
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSmsAdapterProfileFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaSmsAdapterProfileFilter extends KalturaFilter {

    

    constructor(data? : KalturaSmsAdapterProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSmsAdapterProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSmsAdapterProfileFilter'] = KalturaSmsAdapterProfileFilter;