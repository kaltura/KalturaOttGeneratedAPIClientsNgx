
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUploadSubtitlesArgs  extends KalturaObjectBaseArgs {
    fileName? : string;
}


export class KalturaUploadSubtitles extends KalturaObjectBase {

    fileName : string;

    constructor(data? : KalturaUploadSubtitlesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadSubtitles' },
				fileName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUploadSubtitles'] = KalturaUploadSubtitles;