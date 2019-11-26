
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermission, KalturaPermissionArgs } from './KalturaPermission';

export interface KalturaGroupPermissionArgs  extends KalturaPermissionArgs {
    
}


export class KalturaGroupPermission extends KalturaPermission {

    readonly group : string;

    constructor(data? : KalturaGroupPermissionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroupPermission' },
				group : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGroupPermission'] = KalturaGroupPermission;