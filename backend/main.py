from html2image import Html2Image
from PIL import Image
from content.ideas import *

hti = Html2Image()

# # screenshot an HTML file
# hti.screenshot(
#     html_file='test.html', save_as='output.png'
# )

if __name__ == "__main__":
    # x = input("Enter your template: ")

    hti.screenshot(
        html_str="backend\html\infographics.html", save_as='output.png'
    )
    img = Image.open('output.png')
    img.show()

    # ideas = get_idea()
    # # print(ideas)
    # for s in ideas:
    #     if x in s:
            
    