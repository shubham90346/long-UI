import React from 'react';

function re(props) {
    return (
        <div>
            <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
  <li class="nav-item" role="presentation">
    <button
      class="nav-link active"
      id="home-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#home0"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
    >
      Home
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="profile-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#profile0"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
    >
      Profile
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="contact-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#contact0"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
    >
      Contact
    </button>
  </li>
</ul>
<div class="tab-content" id="myTabContent0">
  <div
    class="tab-pane fade show active"
    id="home0"
    role="tabpanel"
    aria-labelledby="home-tab0"
  >
    Tab 1 content.
  </div>
  <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
    Tab 3 content
  </div>
</div>
        </div>
    );
}

export default re;