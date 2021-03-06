
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBasePermissionFilter, KalturaBasePermissionFilterArgs } from './KalturaBasePermissionFilter';

export interface KalturaPermissionByIdInFilterArgs  extends KalturaBasePermissionFilterArgs {
    idIn? : string;
}


export class KalturaPermissionByIdInFilter extends KalturaBasePermissionFilter {

    idIn : string;

    constructor(data? : KalturaPermissionByIdInFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionByIdInFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPermissionByIdInFilter'] = KalturaPermissionByIdInFilter;