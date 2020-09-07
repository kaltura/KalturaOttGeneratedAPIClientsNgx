
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItem, KalturaPermissionItemArgs } from './KalturaPermissionItem';

export interface KalturaApiArgumentPermissionItemArgs  extends KalturaPermissionItemArgs {
    service? : string;
	action? : string;
	parameter? : string;
}


export class KalturaApiArgumentPermissionItem extends KalturaPermissionItem {

    service : string;
	action : string;
	parameter : string;

    constructor(data? : KalturaApiArgumentPermissionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiArgumentPermissionItem' },
				service : { type : 's' },
				action : { type : 's' },
				parameter : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaApiArgumentPermissionItem'] = KalturaApiArgumentPermissionItem;