<template>
  <div class="textarea">
    <div
      :class="[
        'textarea-wrapper',
        focus && 'textarea-wrapper--focus',
        disabled && 'textarea-wrapper--disabled',
        readonly && 'textarea-wrapper--readonly',
      ]"
    >
      <textarea
        v-model="text"
        class="textarea-input"
        :placeholder="placeholder"
        name="textarea"
        :maxlength="maxLength"
        :disabled="disabled"
        :readonly="readonly"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
      ></textarea>
      <p class="textarea-count">{{ textCount }}</p>
    </div>
    <button
      v-if="!readonly && !disabled"
      id="save"
      :class="['textarea-save', focus && 'textarea-save--focus', !isChanged && 'textarea-save--disabled']"
      :disabled="!isChanged"
      type="button"
      @click="onClickSave"
    >
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  maxLength: number;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  disabled: false,
  readonly: false,
  maxLength: 500,
});
const focus = ref<boolean>(false);
const text = ref<string>('');
const savedText = ref<string>('');
const onFocus = () => {
  if (props.readonly) {
    return;
  }
  focus.value = true;
};
const onClickSave = () => {
  savedText.value = text.value;
  focus.value = false;
};
const onBlur = (e: FocusEvent) => {
  const relatedTarget = e.relatedTarget as HTMLElement | null;
  if (relatedTarget && relatedTarget.id === 'save') {
    return;
  }
  text.value = savedText.value;
  focus.value = false;
};

const isChanged = computed(() => savedText.value !== text.value);
const textCount = computed(() => text.value.length);
</script>

<style scoped lang="scss">
textarea:disabled {
  background: none;
  color: $systemOrange;
  cursor: not-allowed;
}
textarea:read-only {
  background: #fafafa;
}
.textarea {
  display: flex;
  gap: 5px;
  height: 100px;
}
.textarea-wrapper {
  position: relative;
  width: 100%;
  border: 1px solid $systemBorderColor;
  display: flex;
  &--focus {
    outline: 1px solid $systemFocusColor;
  }
  &--disabled {
    background: #fafafa;
    opacity: 0.5;
  }
  &--readonly {
    background: #fafafa;
  }
}

.textarea-input {
  width: 100%;
  margin: 10px 10px 20px;
  border: none;
  @include font_1440;
  border-radius: 2px;
}
.textarea-input:focus {
  border: none;
  outline: none;
}

.textarea-count {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 10px 0 0;
  color: $black;
  @include font_1440;
}

.textarea-save {
  border: 1px solid $systemBorderColor;
  color: $systemLightGray;
  flex-basis: 10%;
  @include font_1440;
  border-radius: 2px;
}
.textarea-save--focus {
  color: $systemFocusColor;
}
.textarea-save--disabled {
  color: $black;
  opacity: 0.3;
}
</style>
