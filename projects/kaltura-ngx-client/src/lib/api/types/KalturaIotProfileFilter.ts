
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaIotProfileFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaIotProfileFilter extends KalturaFilter {

    

    constructor(data? : KalturaIotProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIotProfileFilter'] = KalturaIotProfileFilter;