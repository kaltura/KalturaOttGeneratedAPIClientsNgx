
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenerateSemanticQueryArgs  extends KalturaObjectBaseArgs {
    text? : string;
}


export class KalturaGenerateSemanticQuery extends KalturaObjectBase {

    text : string;

    constructor(data? : KalturaGenerateSemanticQueryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenerateSemanticQuery' },
				text : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenerateSemanticQuery'] = KalturaGenerateSemanticQuery;