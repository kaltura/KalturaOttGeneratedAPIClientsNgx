
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPermissionFilterArgs  extends KalturaFilterArgs {
    currentUserPermissionsContains? : boolean;
	roleIdIn? : number;
}


export class KalturaPermissionFilter extends KalturaFilter {

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