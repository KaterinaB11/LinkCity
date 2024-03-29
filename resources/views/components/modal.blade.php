@isset($id)
    <dialog class="Modal" {{ $attributes->merge(['id' => $id]) }} x-data="Modal" x-bind="ModalInner">
        {!! $slot !!}
        <button class="ModalCloser" x-bind="ModalCloser"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 320 512" fill="currentColor"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg></button>
    </dialog>
@endisset