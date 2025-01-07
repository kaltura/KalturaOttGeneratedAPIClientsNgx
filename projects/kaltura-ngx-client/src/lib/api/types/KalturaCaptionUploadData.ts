
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetEnrichCaptionType } from './KalturaAssetEnrichCaptionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCaptionUploadDataArgs  extends KalturaObjectBaseArgs {
    captionType? : KalturaAssetEnrichCaptionType;
}


export class KalturaCaptionUploadData extends KalturaObjectBase {

    captionType : KalturaAssetEnrichCaptionType;
	readonly captionLanguage : string;

    constructor(data? : KalturaCaptionUploadDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionUploadData' },
				captionType : { type : 'es', subTypeConstructor : KalturaAssetEnrichCaptionType, subType : 'KalturaAssetEnrichCaptionType' },
				captionLanguage : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCaptionUploadData'] = KalturaCaptionUploadData;