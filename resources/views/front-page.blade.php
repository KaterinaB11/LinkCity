@extends('layouts.app')

@section('content')

<div class="sections-container" style="display: flex; flex-direction: column;">
    @include('sections.hero')
    @include('sections.projects')
    @include('sections.gallery')
    @include('sections.about')
    @include('sections.menu')
    @include('sections.tamtomy')
  </div>
@endsection