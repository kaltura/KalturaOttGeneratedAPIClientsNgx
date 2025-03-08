
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubtitlesArgs  extends KalturaObjectBaseArgs {
    fileName? : string;
	language? : string;
}


export class KalturaSubtitles extends KalturaObjectBase {

    readonly id : number;
	readonly createDate : number;
	fileName : string;
	language : string;

    constructor(data? : KalturaSubtitlesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubtitles' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				fileName : { type : 's' },
				language : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubtitles'] = KalturaSubtitles;