
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaImageArgs  extends KalturaObjectBaseArgs {
    ratio? : string;
	width? : number;
	height? : number;
	url? : string;
	version? : number;
	isDefault? : boolean;
	imageTypeId? : number;
	imageTypeName? : string;
}


export class KalturaMediaImage extends KalturaObjectBase {

    ratio : string;
	width : number;
	height : number;
	url : string;
	version : number;
	readonly id : string;
	isDefault : boolean;
	imageTypeId : number;
	imageTypeName : string;

    constructor(data? : KalturaMediaImageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaImage' },
				ratio : { type : 's' },
				width : { type : 'n' },
				height : { type : 'n' },
				url : { type : 's' },
				version : { type : 'n' },
				id : { type : 's', readOnly : true },
				isDefault : { type : 'b' },
				imageTypeId : { type : 'n' },
				imageTypeName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaImage'] = KalturaMediaImage;