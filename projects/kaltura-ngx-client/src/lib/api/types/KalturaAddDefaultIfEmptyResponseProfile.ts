
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaAddDefaultIfEmptyResponseProfileArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaAddDefaultIfEmptyResponseProfile extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaAddDefaultIfEmptyResponseProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAddDefaultIfEmptyResponseProfile' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAddDefaultIfEmptyResponseProfile'] = KalturaAddDefaultIfEmptyResponseProfile;