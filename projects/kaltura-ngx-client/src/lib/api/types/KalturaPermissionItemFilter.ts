
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPermissionItemFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaPermissionItemFilter extends KalturaFilter {

    

    constructor(data? : KalturaPermissionItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPermissionItemFilter'] = KalturaPermissionItemFilter;