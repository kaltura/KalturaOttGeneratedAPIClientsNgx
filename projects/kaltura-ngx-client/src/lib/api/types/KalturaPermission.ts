
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionType } from './KalturaPermissionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionArgs  extends KalturaObjectBaseArgs {
    name? : string;
	friendlyName? : string;
	type? : KalturaPermissionType;
	permissionItemsIds? : string;
}


export class KalturaPermission extends KalturaObjectBase {

    readonly id : number;
	name : string;
	friendlyName : string;
	readonly dependsOnPermissionNames : string;
	type : KalturaPermissionType;
	permissionItemsIds : string;

    constructor(data? : KalturaPermissionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermission' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				friendlyName : { type : 's' },
				dependsOnPermissionNames : { type : 's', readOnly : true },
				type : { type : 'es', subTypeConstructor : KalturaPermissionType, subType : 'KalturaPermissionType' },
				permissionItemsIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPermission'] = KalturaPermission;