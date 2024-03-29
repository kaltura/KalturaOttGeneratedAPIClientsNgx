
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaDynamicListArgs  extends KalturaOTTObjectSupportNullableArgs {
    name? : string;
}


export class KalturaDynamicList extends KalturaOTTObjectSupportNullable {

    readonly id : number;
	readonly createDate : number;
	readonly updateDate : number;
	name : string;

    constructor(data? : KalturaDynamicListArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicList' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				name : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDynamicList'] = KalturaDynamicList;