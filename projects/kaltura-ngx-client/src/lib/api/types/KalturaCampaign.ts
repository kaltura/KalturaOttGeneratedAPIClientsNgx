
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectState } from './KalturaObjectState';
import { KalturaPromotion } from './KalturaPromotion';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaCampaignArgs  extends KalturaCrudObjectArgs {
    startDate? : number;
	endDate? : number;
	name? : string;
	systemName? : string;
	description? : string;
	promotion? : KalturaPromotion;
	message? : string;
	collectionIdIn? : string;
}


export class KalturaCampaign extends KalturaCrudObject {

    readonly id : number;
	readonly createDate : number;
	readonly updateDate : number;
	startDate : number;
	endDate : number;
	name : string;
	systemName : string;
	description : string;
	readonly state : KalturaObjectState;
	promotion : KalturaPromotion;
	message : string;
	collectionIdIn : string;

    constructor(data? : KalturaCampaignArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaign' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				state : { type : 'es', readOnly : true, subTypeConstructor : KalturaObjectState, subType : 'KalturaObjectState' },
				promotion : { type : 'o', subTypeConstructor : KalturaPromotion, subType : 'KalturaPromotion' },
				message : { type : 's' },
				collectionIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCampaign'] = KalturaCampaign;