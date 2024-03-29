
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetStructMetaArgs  extends KalturaObjectBaseArgs {
    ingestReferencePath? : string;
	protectFromIngest? : boolean;
	defaultIngestValue? : string;
	isInherited? : boolean;
	isLocationTag? : boolean;
	suppressedOrder? : number;
	aliasName? : string;
}


export class KalturaAssetStructMeta extends KalturaObjectBase {

    readonly assetStructId : number;
	readonly metaId : number;
	ingestReferencePath : string;
	protectFromIngest : boolean;
	defaultIngestValue : string;
	readonly createDate : number;
	readonly updateDate : number;
	isInherited : boolean;
	isLocationTag : boolean;
	suppressedOrder : number;
	aliasName : string;

    constructor(data? : KalturaAssetStructMetaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStructMeta' },
				assetStructId : { type : 'n', readOnly : true },
				metaId : { type : 'n', readOnly : true },
				ingestReferencePath : { type : 's' },
				protectFromIngest : { type : 'b' },
				defaultIngestValue : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				isInherited : { type : 'b' },
				isLocationTag : { type : 'b' },
				suppressedOrder : { type : 'n' },
				aliasName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetStructMeta'] = KalturaAssetStructMeta;