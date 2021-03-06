
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTagFilterArgs  extends KalturaFilterArgs {
    tagEqual? : string;
	tagStartsWith? : string;
	typeEqual? : number;
	languageEqual? : string;
	idIn? : string;
}


export class KalturaTagFilter extends KalturaFilter {

    tagEqual : string;
	tagStartsWith : string;
	typeEqual : number;
	languageEqual : string;
	idIn : string;

    constructor(data? : KalturaTagFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTagFilter' },
				tagEqual : { type : 's' },
				tagStartsWith : { type : 's' },
				typeEqual : { type : 'n' },
				languageEqual : { type : 's' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTagFilter'] = KalturaTagFilter;