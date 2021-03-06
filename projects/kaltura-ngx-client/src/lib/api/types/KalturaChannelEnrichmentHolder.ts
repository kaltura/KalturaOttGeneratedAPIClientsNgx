
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaChannelEnrichment } from './KalturaChannelEnrichment';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaChannelEnrichmentHolderArgs  extends KalturaObjectBaseArgs {
    type? : KalturaChannelEnrichment;
}


export class KalturaChannelEnrichmentHolder extends KalturaObjectBase {

    type : KalturaChannelEnrichment;

    constructor(data? : KalturaChannelEnrichmentHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelEnrichmentHolder' },
				type : { type : 'es', subTypeConstructor : KalturaChannelEnrichment, subType : 'KalturaChannelEnrichment' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaChannelEnrichmentHolder'] = KalturaChannelEnrichmentHolder;