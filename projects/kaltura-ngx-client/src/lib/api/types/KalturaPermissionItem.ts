
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionItemArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isExcluded? : boolean;
}


export class KalturaPermissionItem extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isExcluded : boolean;

    constructor(data? : KalturaPermissionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItem' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isExcluded : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPermissionItem'] = KalturaPermissionItem;