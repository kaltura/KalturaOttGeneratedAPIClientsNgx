
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentValueArgs  extends KalturaObjectBaseArgs {
    systematicName? : string;
	multilingualName? : KalturaTranslationToken[];
	value? : string;
	threshold? : number;
}


export class KalturaSegmentValue extends KalturaObjectBase {

    readonly id : number;
	systematicName : string;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	value : string;
	threshold : number;

    constructor(data? : KalturaSegmentValueArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentValue' },
				id : { type : 'n', readOnly : true },
				systematicName : { type : 's' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				value : { type : 's' },
				threshold : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegmentValue'] = KalturaSegmentValue;