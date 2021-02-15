
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBasePermissionFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBasePermissionFilter extends KalturaFilter {

    

    constructor(data? : KalturaBasePermissionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBasePermissionFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBasePermissionFilter'] = KalturaBasePermissionFilter;