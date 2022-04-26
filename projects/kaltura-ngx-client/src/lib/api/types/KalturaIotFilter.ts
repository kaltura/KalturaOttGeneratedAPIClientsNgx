
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaIotFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaIotFilter extends KalturaFilter {

    

    constructor(data? : KalturaIotFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIotFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIotFilter'] = KalturaIotFilter;