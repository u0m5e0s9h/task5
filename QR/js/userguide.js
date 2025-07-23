
$(document).ready(function () {
  const links = $(".sub-header-menu a");
  const parts = $(".toggle-part");

  // Sub-header menu toggle
  links.each(function (index) {
    $(this).on("click", function (e) {
      e.preventDefault();
      links.removeClass("active");
      $(this).addClass("active");
      parts.hide();
      $(parts[index]).show();
    });
  });

  parts.hide();
  $(parts[0]).show();
  links.removeClass("active");
  $(links[0]).addClass("active");

  // Guide step image update (including nested steps like 4.1 & 4.2)
  $(".guide_div_text").on("click", function (e) {
    e.stopPropagation(); // Prevent parent steps from overriding child steps
    let newImage = $(this).data("image");
    if (newImage) {
      $("#stepImage").attr("src", newImage).css({
        width: "100%",
        "max-width": "600px",
        height: "auto",
      });
    }

    // Remove active from all steps (including nested)
    $(".guide_div_text").removeClass("active");
    $(this).addClass("active");

    // Show download codes only for step1
    if ($(this).attr("id") === "step1") {
      $("#qrDownloadCodes").show();
    } else {
      $("#qrDownloadCodes").hide();
    }
  });

  // Level image dynamic loading
  $(".div_23").click(function () {
    let newImage = $(this).data("image");
    $("#levelImage").attr("src", newImage);

    $(".div_23").removeClass("active");
    $(this).addClass("active");
  });

  // QR Sticker images
  $(".qr_sticker_images").click(function () {
    $(".qr_sticker_images").removeClass("active");
    $(this).addClass("active");

    // for highlighting number
    const index = $(this).index();
    $(".div_11").removeClass("active");
    $(".div_11").eq(index).addClass("active");

    let images = $(this).data("images");
    if (typeof images === "string") {
      try {
        images = JSON.parse(images);
      } catch (e) {
        images = [images];
      }
    }

    const container = $("#gradeImageContainer");
    container.empty();

    $(".qr_sticker_images").css({ "min-height": "60px" });
    $(this).css({ "min-height": "100px" });

    // grade1 
    if ($(this).attr("id") === "grade1" && images.length >= 2) {
      container.append(`
        <div class="top-images-with-text">
          <div class="image-block">
            <div class="image-label">QR인쇄물</div>
            <img src="${images[0]}" alt="QR Step 1A">
          </div>
          <div class="image-block">
            <div class="image-label">부착용 포켓</div>
            <img src="${images[1]}" alt="QR Step 1B">
          </div>
        </div>
      `);
      if (images.length === 3) {
        container.append(`
          <div class="bottom-image">
            <img src="${images[2]}" alt="QR Step 1C">
          </div>
        `);
      }
    }

    // grade2
    else if ($(this).attr("id") === "grade2" && images.length === 2) {
      container.append(`
        <div class="grade2-wrapper">
          <img class="grade2-first" src="${images[0]}" alt="QR Step 2A">
          <img class="grade2-second" src="${images[1]}" alt="QR Step 2B">
        </div>
      `);
    }

    // grade3 
    else if ($(this).attr("id") === "grade3" && images.length === 2) {
      container.append(`
        <div class="grade3-wrapper">
          <img class="grade3-first" src="${images[0]}" alt="QR Step 3A">
          <img class="grade3-second" src="${images[1]}" alt="QR Step 3B">
        </div>
      `);
    }

    // grade4
    else if ($(this).attr("id") === "grade4" && images.length === 2) {
      container.append(`
        <div class="grade4-wrapper">
          <img class="grade4-first" src="${images[0]}" alt="QR Step 4A">
          <img class="grade4-second" src="${images[1]}" alt="QR Step 4B">
        </div>
      `);
    }

    else {
      images.forEach(imgSrc => {
        container.append(`<img src="${imgSrc}" alt="Step Image">`);
      });
    }
  });

  // Handle number clicks to trigger related text
  $(".div_11").click(function () {
    const index = $(this).index(".div_11");
    $(".qr_sticker_images").eq(index).trigger("click");
  });

  $(".qr_sticker_images").first().trigger("click");
});

