
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBasePermissionFilter, KalturaBasePermissionFilterArgs } from './KalturaBasePermissionFilter';

export interface KalturaPermissionFilterArgs  extends KalturaBasePermissionFilterArgs {
    currentUserPermissionsContains? : boolean;
	roleIdIn? : number;
}


export class KalturaPermissionFilter extends KalturaBasePermissionFilter {

    currentUserPermissionsContains : boolean;
	roleIdIn : number;

    constructor(data? : KalturaPermissionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionFilter' },
				currentUserPermissionsContains : { type : 'b' },
				roleIdIn : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPermissionFilter'] = KalturaPermissionFilter;