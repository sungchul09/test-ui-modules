import { defineStore } from 'pinia';
import { CardData } from '~~/types';

export const useCardStore = defineStore('cardStore', () => {
  const cardData = ref<CardData>({
    title: '',
    label: '',
    description: '',
    highlight: '',
    crossOut: '',
    reviewText: '',
    rating: 0,
    author: '',
  });

  function setCardData() {
    cardData.value = {
      title: '고양이 장난감',
      label: 'Animal',
      description:
        '사람의 피부 촉감과 유사하다는 펠트 재질로 만들어져 아이들에게 거부감없고 하나하나 박음질 되어 냥이들의 뒷발 킥킥과 깨물깨물에도 튼튼한 장난감 쿠션이랍니다! 고양이들을 위한 장난감으로 최고입니다.',
      highlight: '5개 남음',
      crossOut: 'Cross Out',
      reviewText:
        '어제 주문했는데 오늘 바로도착하더라구요. 고양이가 너무 좋아합니다. 가격도 저렴해서 너무 좋아요! 다른 상품도 찾아보고 주문할까 고민중이에요.',
      rating: 4,
      author: 'seongcheol.yun',
    };
  }

  return {
    cardData,
    setCardData,
  };
});
