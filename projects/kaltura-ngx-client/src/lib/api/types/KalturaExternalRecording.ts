
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRecording, KalturaRecordingArgs } from './KalturaRecording';

export interface KalturaExternalRecordingArgs  extends KalturaRecordingArgs {
    externalId? : string;
	metaData? : { [key : string] : KalturaStringValue};
}


export class KalturaExternalRecording extends KalturaRecording {

    externalId : string;
	metaData : { [key : string] : KalturaStringValue};
	readonly expiryDate : number;

    constructor(data? : KalturaExternalRecordingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalRecording' },
				externalId : { type : 's' },
				metaData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				expiryDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExternalRecording'] = KalturaExternalRecording;